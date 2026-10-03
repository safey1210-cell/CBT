/**
 * Satu sumber kebenaran untuk nomor WhatsApp panitia/bimbel.
 * Ganti nomor cukup di satu tempat ini — semua tombol WA ikut.
 */

/** Format yang dibaca manusia, dipakai untuk tampilan di halaman. */
export const WA_SUPPORT_DISPLAY = "+62 813-2486-8790";

/** Format wa.me: hanya angka, tanpa "+" — diturunkan dari WA_SUPPORT_DISPLAY. */
export const WA_SUPPORT_NUMBER = WA_SUPPORT_DISPLAY.replace(/\D/g, "");

/**
 * Tautan WhatsApp panitia. `message` ditulis apa adanya; spasi, `*`, `&`,
 * dan karakter khusus lain di-encode otomatis supaya aman di query string.
 */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WA_SUPPORT_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
