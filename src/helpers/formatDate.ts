export function formatDate(date: string){
  return date.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
}