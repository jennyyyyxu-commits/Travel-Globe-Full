/* ===== Globe init ===== */
const globe = Globe()(document.getElementById('globe-container'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
  .atmosphereColor('#8ec5ff')
  .atmosphereAltitude(0.16);

const controls = globe.controls();
controls.autoRotate = true;          // idle rotation
controls.autoRotateSpeed = 0.55;
controls.enableDamping = true;       // smooth drag feel
controls.dampingFactor = 0.08;

// pause idle rotation while the user interacts, resume after a short idle
let idleTimer;
controls.addEventListener('start', () => {
  controls.autoRotate = false;
  clearTimeout(idleTimer);
});
controls.addEventListener('end', () => {
  idleTimer = setTimeout(() => {
    if (!overlay.classList.contains('open')) controls.autoRotate = true;
  }, 6000);
});

// initial view: world overview
globe.pointOfView({ lat: 10, lng: 70, altitude: 2.6 }, 0);

/* ===== Trip markers: WebGL labels + pulsing rings ===== */
globe
  .labelsData(TRIPS)
  .labelLat(d => d.lat)
  .labelLng(d => d.lng)
  .labelAltitude(0.012)
  .labelText(d => d.city)
  .labelSize(0.85)
  .labelResolution(4)
  .labelColor(d => d.color)
  .labelIncludeDot(true)
  .labelDotRadius(0.5)
  .labelDotOrientation('bottom')
  .onLabelClick(d => openDiary(d));

globe
  .ringsData(TRIPS)
  .ringLat(d => d.lat)
  .ringLng(d => d.lng)
  .ringColor(d => d.color + '99')
  .ringMaxRadius(3)
  .ringPropagationSpeed(2)
  .ringRepeatPeriod(1200);

// click on the globe: open the nearest city's diary
globe.onGlobeClick(({ lat, lng }) => {
  let best = null, bestD = Infinity;
  for (const t of TRIPS) {
    let dLng = (t.lng - lng) % 360;
    if (dLng > 180) dLng -= 360;
    if (dLng < -180) dLng += 360;
    const dLat = t.lat - lat;
    const d = Math.hypot(dLat, dLng * Math.cos(lat * Math.PI / 180));
    if (d < bestD) { bestD = d; best = t; }
  }
  if (best && bestD < 5) openDiary(best);
});

/* ===== Header stats ===== */
const countries = new Set(TRIPS.map(t => t.country)).size;
const years = TRIPS.map(t => +t.date.slice(0, 4));
document.getElementById('stats').textContent =
  `${countries} Countries · ${TRIPS.length} Cities · ${Math.min(...years)}–${Math.max(...years)}`;

/* ===== Diary modal ===== */
const overlay = document.getElementById('modal-overlay');
const card = document.getElementById('diary-card');

function fmtCoord(lat, lng) {
  const ns = lat >= 0 ? 'N' : 'S';
  const ew = lng >= 0 ? 'E' : 'W';
  return `${Math.abs(lat).toFixed(2)}° ${ns}, ${Math.abs(lng).toFixed(2)}° ${ew}`;
}

function photoList(trip) {
  return Array.isArray(trip.photo) ? trip.photo : (trip.photo ? [trip.photo] : []);
}

/* Photos are stored as bare filenames in data.js. On GitHub Pages they live
   in the original Travel-Globe repo, so bare filenames are prefixed with the
   original site's URL. During local development they live in the photos/
   subfolder. Absolute http(s) URLs pass through unchanged. */
const LOCAL_RUN = location.hostname === ''
  || location.hostname === 'localhost'
  || location.hostname === '127.0.0.1';

const PHOTO_BASE = 'https://jennyyyyxu-commits.github.io/Travel-Globe/';

function photoSrc(name) {
  if (/^(https?:|data:)/i.test(name)) return name;
  return LOCAL_RUN ? `photos/${name}` : PHOTO_BASE + name;
}
function photoFallback(name) {
  if (/^(https?:|data:)/i.test(name)) return null;
  return LOCAL_RUN ? name : null;
}
function bindPhoto(img, name) {
  img.onerror = () => {
    const alt = photoFallback(name);
    if (alt && alt !== img.src) { img.onerror = null; img.src = alt; }
  };
  img.src = photoSrc(name);
}

function openDiary(trip) {
  card.style.setProperty('--city', trip.color);

  const photos = photoList(trip);
  const cover = document.getElementById('diary-cover');

  // gallery: the user's own photos
  const galleryItems = photos.map((src, i) => ({ src, alt: `${trip.city} photo ${i + 1}` }));
  if (galleryItems.length) {
    cover.style.display = '';
    bindPhoto(cover, galleryItems[0].src);
  } else {
    cover.style.display = 'none';
  }

  // thumbnail strip (shown when there is more than one picture)
  const thumbRow = document.getElementById('thumb-row');
  thumbRow.innerHTML = '';
  if (galleryItems.length > 1) {
    galleryItems.forEach((item, i) => {
      const t = document.createElement('img');
      bindPhoto(t, item.src);
      t.alt = item.alt;
      if (i === 0) t.classList.add('active');
      t.addEventListener('click', () => {
        bindPhoto(cover, item.src);
        thumbRow.querySelectorAll('img').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
      });
      thumbRow.appendChild(t);
    });
  }

  document.getElementById('diary-date').textContent = trip.dateLabel;
  document.getElementById('diary-place').textContent = trip.country;
  document.getElementById('diary-title').textContent = trip.city;
  document.getElementById('info-coord').textContent = fmtCoord(trip.lat, trip.lng);
  document.getElementById('info-climate').textContent = trip.climate;
  document.getElementById('info-terrain').textContent = trip.terrain;
  document.getElementById('info-history').textContent = trip.history;
  document.getElementById('diary-tips').innerHTML =
    trip.tips.map(t => `<li>${t}</li>`).join('');

  overlay.classList.add('open');
  controls.autoRotate = false;   // hold still while reading
  globe.pointOfView({ lat: trip.lat, lng: trip.lng, altitude: 1.7 }, 900);
}

function closeDiary() {
  overlay.classList.remove('open');
  controls.autoRotate = true;
}

document.getElementById('close-btn').addEventListener('click', closeDiary);
overlay.addEventListener('click', e => { if (e.target === overlay) closeDiary(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeDiary(); });
