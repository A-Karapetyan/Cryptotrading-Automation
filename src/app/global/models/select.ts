export class DropdownModel<T = any> {
  public name: string;
  public value: T;
  public image: string;

  constructor(name: string, value: T, image?: string) {
    this.name = name;
    this.value = value;
    this.image = image;
  }
}
