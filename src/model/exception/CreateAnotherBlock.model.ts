export class CreateAnotherBlockException extends Error {

    constructor() {
        super('Cannot move down anymore');
    }

}