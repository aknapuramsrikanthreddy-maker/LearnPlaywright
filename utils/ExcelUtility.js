import ExcelJS from 'exceljs';

export async function getExcelData() {

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile('./testdata/LoginData.xlsx');

    const worksheet = workbook.getWorksheet('LoginData');

    const data = [];

    worksheet.eachRow((row, rowNumber) => {

        if (rowNumber === 1) return;

        data.push({
            username: row.getCell(1).value,
            password: row.getCell(2).value,
            fullname: row.getCell(3).value,
            email: row.getCell(4).value,
            currentaddress: row.getCell(5).value,
            permanentaddress: row.getCell(6).value
        });

    });

    return data;
}