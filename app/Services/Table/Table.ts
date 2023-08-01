import LucidTable from "App/Models/Table";


export default class TableService {
  public async findById(tableId: number): Promise<LucidTable> {
    return await LucidTable.findOrFail(tableId);
  }
}
