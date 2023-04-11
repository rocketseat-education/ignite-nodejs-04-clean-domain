import { randomUUID } from "node:crypto"

class Student {
  public id: string
  public name: string

  constructor(name: string, id?: string) {
    this.name = name
    this.id = id ?? randomUUID()
  }
}
