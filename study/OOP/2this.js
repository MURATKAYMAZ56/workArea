function Month(name, days) {
    this.name = name;
    this.days = days
}
const months = [
    new Month('january', 31),
    new Month('February', 28),
    new Month('March', 31),
    new Month('April', 30),
    new Month('May', 31),
    new Month('June', 30),
    new Month('July', 31),
    new Month('August', 31),
    new Month('September', 30),
    new Month('October', 31),
    new Month('November', 30),
    new Month('December', 31)
];
months
    .filter(x => x.days === 31)///filter sor! ne istiyon days 31 olani istiyom
    .map(x => `  ${x.name} has ${x.days} days.`)
    .forEach(x => console.log(x));


