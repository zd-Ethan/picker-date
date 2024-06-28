const calendarLang = {
  formatYear: "YYYY",
  formatMonth: "MMM YYYY",
  today: "hari ini",
  view: {
    month: "bulan",
    year: "tahun",
    week: "minggu",
    day: "hari"
  },
  month: {
    long: {
      January: "Januari",
      February: "Februari",
      March: "Mac",
      April: "April",
      May: "Mei",
      June: "Jun",
      July: "Julai",
      August: "Ogos",
      September: "September",
      October: "Oktober",
      November: "November",
      December: "Disember"
    },
    short: {
      January: "Jan",
      February: "Feb",
      March: "Mac",
      April: "Apr",
      May: "Mei",
      June: "Jun",
      July: "Jul",
      August: "Ogos",
      September: "Sept",
      October: "Okt",
      November: "Nov",
      December: "Dis"
    }
  },
  week: {
    long: {
      self: "Minggu",
      monday: "Isnin",
      tuesday: "Selasa",
      wednesday: "Rabu",
      thursday: "Khamis",
      friday: "Jumaat",
      saturday: "Sabtu",
      sunday: "Ahad"
    },
    short: {
      self: "Minggu",
      monday: "Isn",
      tuesday: "Sel",
      wednesday: "Rab",
      thursday: "Kha",
      friday: "Jum",
      saturday: "Sab",
      sunday: "Ahd"
    }
  }
};
const lang = {
  locale: "ms-MY",
  empty: {
    description: "Tiada data"
  },
  drawer: {
    okText: "okey",
    cancelText: "batalkan"
  },
  popconfirm: {
    okText: "okey",
    cancelText: "batalkan"
  },
  modal: {
    okText: "okey",
    cancelText: "batalkan"
  },
  pagination: {
    goto: "pergi ke",
    page: "Halaman",
    countPerPage: "Artikel / Halaman",
    total: "Jumlah {0}"
  },
  table: {
    okText: "okey",
    resetText: "set semula"
  },
  upload: {
    start: "mulakan",
    cancel: "batalkan",
    delete: "padam",
    retry: "Klik untuk mencuba lagi",
    buttonText: "Klik untuk memuat naik",
    preview: "pratonton",
    drag: "Klik atau seret fail untuk memuat naik di sini",
    dragHover: "Kosongkan fail dan mula memuat naik",
    error: "muatnaik gagal"
  },
  calendar: calendarLang,
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: "Sila pilih tarikh",
      week: "Sila pilih seminggu",
      month: "Sila pilih bulan",
      year: "Sila pilih tahun",
      quarter: "Sila pilih suku",
      time: "Sila pilih masa"
    },
    rangePlaceholder: {
      date: ["tarikh mula", "tarikh tamat"],
      week: ["minggu mula", "hujung minggu"],
      month: ["bulan permulaan", "akhir bulan"],
      year: ["tahun mula", "akhir tahun"],
      quarter: ["suku mula", "akhir suku tahun"],
      time: ["Masa mula", "Masa tamat"]
    },
    selectTime: "tempoh pemilihan",
    today: "hari ini",
    now: "sekarang",
    ok: "okey"
  },
  image: {
    loading: "memuatkan"
  },
  imagePreview: {
    fullScreen: "skrin penuh",
    rotateRight: "putar ke kanan",
    rotateLeft: "berputar ke kiri",
    zoomIn: "besarkan",
    zoomOut: "zum keluar",
    originalSize: "saiz asal"
  },
  typography: {
    copy: "salinan",
    copied: "disalin",
    edit: "edit",
    expand: "lipat",
    collapse: "mengembang"
  },
  colorPicker: {
    history: "Warna yang digunakan baru-baru ini",
    preset: "Warna lalai sistem",
    empty: "Tiada data"
  }
};
export { lang as default };
