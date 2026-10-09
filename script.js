// Ścieżka do pliku FireRed.gba w Twoim repozytorium GitHub
const romUrl = 'FireRed.gba'; // lub 'roms/FireRed.gba' jeśli plik jest w podfolderze

const loadingStatus = document.getElementById('loading-status');
const startBtn = document.getElementById('start-btn');

let romData = null;

// Pobieranie pliku ROM z serwera (GitHub Pages)
fetch(romUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Nie udało się pobrać pliku gry (status: ${response.status})`);
        }
        return response.arrayBuffer();
    })
    .then(buffer => {
        romData = buffer;
        loadingStatus.textContent = 'Gra została pobrana pomyślnie!';
        loadingStatus.style.color = 'green';
        
        startBtn.textContent = 'Uruchom grę';
        startBtn.disabled = false;
    })
    .catch(error => {
        console.error('Błąd ładowania ROMu:', error);
        loadingStatus.textContent = 'Błąd: Nie znaleziono pliku FireRed.gba w repozytorium.';
        loadingStatus.style.color = 'red';
    });

// Po kliknięciu uruchamiasz emulator przekazując zmienną romData
startBtn.addEventListener('click', () => {
    if (!romData) return;
    
    // UKRYJ STATUS / PRZYCISK
    document.querySelector('.file-loader').style.display = 'none';
    loadingStatus.style.display = 'none';

    // TUTAJ WYWOŁUJESZ INICJALIZACJE SWOJEGO EMULATORA, np.:
    // startEmulator(romData); 
    // (Konkretna funkcja zależy od biblioteki GBA, której używasz w script.js)
});