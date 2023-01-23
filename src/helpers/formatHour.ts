export function formatHour(hour: string){
  return hour.replace(/(\d{2})(\d{2})/, "$1:$2");
}