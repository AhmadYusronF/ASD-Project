document.addEventListener("DOMContentLoaded", () => {
  // --- DATA ---
  const candidatesData = [
    {
      id: 1,
      name: "PASLON - 1",
      members: [
        { name: "Vina", role: "Calon Ketua" },
        { name: "Hadi", role: "Calon Wakil" },
      ],
      image:
        "https://th.bing.com/th/id/OIP.6_ooXh_XKH3gtnTJ7R0TFwHaEK?r=0&w=2560&h=1440&rs=1&pid=ImgDetMain",
      vision:
        "Menjadi wadah aspirasi dan kreativitas yang unggul, berintegritas, dan mampu beradaptasi dengan perubahan zaman.",
      mission: [
        "Menyelenggarakan forum diskusi rutin untuk menampung aspirasi.",
        "Membuat platform digital untuk berekspresi dan berkolaborasi.",
        "Menjalin kemitraan strategis dengan pihak eksternal.",
        "Meningkatkan transparansi dan akuntabilitas dalam pengelolaan organisasi.",
        "Mengadakan pelatihan manajemen organisasi untuk anggota baru.",
        "Membangun sistem feedback dua arah antara pengurus dan anggota.",
        "Menyediakan ruang inkubasi ide dan proyek kreatif mahasiswa.",
        "Melibatkan mahasiswa dalam pengambilan keputusan strategis.",
        "Mengintegrasikan nilai-nilai etika dalam setiap kegiatan organisasi.",
        "Mendorong literasi digital dan penggunaan teknologi secara produktif.",
      ],
      witnesses: [{ name: "Gilang" }, { name: "Farah" }],
    },
    {
      id: 2,
      name: "PASLON - 2",
      members: [
        { name: "Salsabila", role: "Calon Ketua" },
        { name: "Bima", role: "Calon Wakil" },
      ],
      image:
        "https://myaffinitymedspa.com/wp-content/uploads/2024/04/Affinity-Financing.jpg",
      vision:
        "Mewujudkan organisasi yang inovatif, kolaboratif, dan berdampak positif bagi seluruh anggota serta lingkungan sekitar.",
      mission: [
        "Meningkatkan kualitas program kerja yang berorientasi pada pengembangan skill.",
        "Membangun sinergi yang kuat antara anggota dan pengurus.",
        "Mengadakan kegiatan sosial yang bermanfaat bagi masyarakat.",
        "Menciptakan lingkungan organisasi yang terbuka dan suportif.",
        "Mengembangkan program mentoring antar anggota.",
        "Membentuk komunitas minat dan bakat berbasis kolaboratif.",
        "Mendorong inovasi dalam penyelesaian masalah organisasi.",
        "Memfasilitasi pengembangan karier melalui pelatihan dan seminar.",
        "Mengintegrasikan kegiatan organisasi dengan pengabdian masyarakat.",
        "Memastikan keberlanjutan program melalui dokumentasi dan evaluasi berkala.",
      ],
      witnesses: [{ name: "Dewi" }, { name: "Eko" }],
    },
    {
      id: 3,
      name: "PASLON - 3",
      members: [
        { name: "Nadia", role: "Calon Ketua" },
        { name: "Rizki", role: "Calon Wakil" },
      ],
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/CVHiB3z_6QxCwW8QtIEhew/l.jpg",
      vision:
        "Terwujudnya generasi pemimpin yang berkarakter, cerdas, dan peduli terhadap sesama.",
      mission: [
        "Mengoptimalkan program kaderisasi kepemimpinan yang terstruktur.",
        "Mengadakan pelatihan soft skill dan hard skill secara berkala.",
        "Mendorong partisipasi aktif dalam kompetisi akademik dan non-akademik.",
        "Menginisiasi gerakan peduli lingkungan dan sosial.",
        "Meningkatkan budaya literasi dan diskusi intelektual di kalangan anggota.",
        "Membangun karakter melalui kegiatan berbasis nilai dan etika.",
        "Menjalin relasi dengan tokoh inspiratif sebagai pembicara dalam kegiatan.",
        "Memberikan ruang ekspresi untuk seni dan budaya mahasiswa.",
        "Mendorong terbentuknya tim inovasi dan kreativitas mahasiswa.",
        "Mewujudkan tata kelola organisasi yang adil, transparan, dan profesional.",
      ],
      witnesses: [{ name: "Indra" }, { name: "Joko" }],
    },
  ];
  // --- DOM Elements ---
  const startScreen = document.getElementById("start-screen");
  const startButton = document.getElementById("start-button");
  const appContainer = document.getElementById("app-container");
  const candidateGridContainer = document.getElementById(
    "candidate-grid-container"
  );
  const modal = document.getElementById("candidate-detail-modal");
  const modalDialog = modal.querySelector(".modal-dialog");
  const notificationAlert = document.getElementById("notification-alert");
  const timerDisplay = document.getElementById("timer-display");

  // --- State ---
  let hasVoted = false;
  let timeRemaining = 120; // 2 minutes in seconds

  // --- FUNCTIONS ---
  const generateCandidateCardHTML = (candidate) => {
    const memberNames = candidate.members.map((m) => m.name).join(" & ");
    const visionSnippet = `${candidate.vision.substring(0, 45)}...`;
    const firstMissionSnippet = `${candidate.mission[0].substring(0, 45)}...`;

    return `
            <div class="candidate-card w-72 rounded-lg p-3 flex flex-col text-left">
                <div class="mb-1.5 px-1">
                    <h3 class="text-base tracking-wider page-heading">${
                      candidate.name
                    }</h3>
                    <p class="text-xs text-slate-400">${memberNames}</p>
                </div>
                <div class="relative w-full aspect-[4/3] mb-1.5 overflow-hidden object-cover">
                    <img src="${
                      candidate.image
                    }" alt="${memberNames}" class="w-full h-full object-cover rounded-lg shadow-md" onerror="this.onerror=null;this.src='https://placehold.co/300x225/334155/e2e8f0?text=Image+Not+Found'">
                </div>
                <div class="grid grid-cols-2 gap-1.5 mb-2 text-xs">
                    <div class="vision-mission-box">
                        <div class="flex items-center mb-1 font-semibold text-slate-200 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>Visi
                        </div>
                        <p class="text-slate-400 leading-tight text-[11px]">${visionSnippet}</p>
                    </div>
                    <div class="vision-mission-box">
                        <div class="flex items-center mb-1 font-semibold text-slate-200 text-xs">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" /></svg>Misi
                        </div>
                        <p class="text-slate-400 leading-tight text-[11px]">${firstMissionSnippet}</p>
                    </div>
                </div>
                <div class="text-center mt-auto">
                    <p class="font-semibold text-xs mb-1 text-slate-400">SAKSI</p>
                    <div class="flex justify-center items-center gap-4">
                        ${candidate.witnesses
                          .map(
                            (witness) => `
                            <div class="text-center">
                                <img src="https://placehold.co/36x36/475569/e2e8f0?text=${witness.name.charAt(
                                  0
                                )}" class="w-9 h-9 rounded-full mx-auto mb-1 border border-slate-600" alt="${
                              witness.name
                            }">
                                <p class="text-xs font-medium">${
                                  witness.name
                                }</p>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                    <button class="button-primary w-full py-1.5 mt-2 rounded-lg font-semibold text-sm" data-candidate-id="${
                      candidate.id
                    }">
                        DETAIL
                    </button>
                </div>
            </div>
        `;
  };

  const populateCandidateGrid = () => {
    candidateGridContainer.innerHTML = candidatesData
      .map(generateCandidateCardHTML)
      .join("");
  };

  const generateModalContentHTML = (candidate) => {
    const missionListItems = candidate.mission
      .map(
        (item) =>
          `<li class="flex items-start"><svg class="w-5 h-5 mr-2 text-sky-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${item}</span></li>`
      )
      .join("");

    modalDialog.innerHTML = `
            <div class="p-6 md:p-8">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="text-3xl font-bold text-white page-heading">${
                      candidate.name
                    }</h2>
                    <button id="close-modal-button" class="text-4xl leading-none font-bold text-slate-400 hover:text-white transition-colors">&times;</button>
                </div>
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/3 flex-shrink-0">
                        <img src="${candidate.image}" alt="${
      candidate.name
    }" class="w-full object-cover rounded-xl shadow-lg">
                        ${candidate.members
                          .map(
                            (member) => `
                            <div class="text-center mt-4">
                                <p class="font-semibold text-xl">${member.name}</p>
                                <p class="text-sm text-slate-400">${member.role}</p>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                    <div class="md:w-2/3 pr-2 max-h-[50vh] ">
                        <h4 class="text-xl font-semibold mb-2 text-sky-300">Visi</h4>
                        <p class="text-slate-300 mb-6">${candidate.vision}</p>
                        <h4 class="text-xl font-semibold mb-2 text-sky-300">Misi</h4>
                        <ul class="space-y-3 text-slate-300 overflow-y-auto pr-2 h-[30vh] modal-scroll-content">${missionListItems}</ul>
                    </div>
                </div>
                <div class="mt-8 text-center">
                    <button id="modal-vote-button" class="primary-vote-button text-white font-bold py-3 px-12 rounded-full text-lg" ${
                      hasVoted ? "disabled" : ""
                    }>
                        ${
                          hasVoted
                            ? "SUARA TELAH DIBERIKAN"
                            : `PILIH ${candidate.name}`
                        }
                    </button>
                </div>
            </div>
        `;

    document
      .getElementById("close-modal-button")
      .addEventListener("click", hideModal);
    document
      .getElementById("modal-vote-button")
      .addEventListener("click", () => processVote(candidate));
  };

  const showModal = (candidate) => {
    if (!candidate) return;
    generateModalContentHTML(candidate);
    modal.classList.remove("hidden");
    setTimeout(() => {
      modalDialog.classList.remove("scale-95", "opacity-0");
      modalDialog.classList.add("scale-100", "opacity-100");
    }, 10);
  };

  const hideModal = () => {
    modalDialog.classList.add("scale-95", "opacity-0");
    modalDialog.classList.remove("scale-100", "opacity-100");
    setTimeout(() => modal.classList.add("hidden"), 300);
  };

  const showNotification = (message) => {
    notificationAlert.textContent = message;
    notificationAlert.classList.remove("hidden");
    setTimeout(() => notificationAlert.classList.add("hidden"), 3000);
  };

  const disableVoting = (reason) => {
    hasVoted = true;
    showNotification(reason);
    hideModal();

    document
      .querySelectorAll(".button-primary, .primary-vote-button")
      .forEach((button) => {
        button.disabled = true;
        button.classList.add("cursor-not-allowed", "opacity-50");
      });
    appContainer.classList.add("opacity-50", "pointer-events-none");
  };

  const processVote = (candidate) => {
    if (hasVoted) return;
    disableVoting(
      `Terima kasih! Suara Anda untuk ${candidate.name} telah direkam.`
    );
  };

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      if (timeRemaining <= 0 || hasVoted) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "00:00";
        if (!hasVoted) {
          disableVoting("Waktu habis! Anda tidak dapat memilih lagi.");
        }
        return;
      }
      timeRemaining--;
      const minutes = Math.floor(timeRemaining / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (timeRemaining % 60).toString().padStart(2, "0");
      timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
  };

  // --- EVENT LISTENERS ---
  candidateGridContainer.addEventListener("click", (event) => {
    const detailButton = event.target.closest(".button-primary");
    if (detailButton) {
      const candidateId = parseInt(detailButton.dataset.candidateId);
      const selectedCandidate = candidatesData.find(
        (c) => c.id === candidateId
      );
      showModal(selectedCandidate);
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) hideModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden"))
      hideModal();
  });

  startButton.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    appContainer.classList.remove("hidden");
    startTimer(); // Timer starts only after the button click
  });

  // --- INITIALIZATION ---
  // This function now just prepares the UI content without starting the timer.
  const initialize = () => {
    populateCandidateGrid();
  };

  initialize(); // Run the setup
});
