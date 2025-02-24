export function calcAge( birthYear:number):number {
    const current= new Date().getFullYear();
    const age=current-birthYear;
    return age;
}