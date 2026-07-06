import ExcelJS from 'exceljs';

function getCellText(cell) {
    const value = cell.value;

    if (value === null || value === undefined) {
        return '';
    }

    if (typeof value === 'object') {
        return value.text || value.result || value.richText?.map(item => item.text).join('') || '';
    }

    return String(value);
}

export async function getExcelData() {

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile('./testdata/logindata.xlsx');

    const worksheet = workbook.getWorksheet('Sheet1');

    const data = [];

    worksheet.eachRow((row, rowNumber) => {

        if (rowNumber === 1) return;

        data.push({
            username: getCellText(row.getCell(1)),
            password: getCellText(row.getCell(2)),
            fullname: getCellText(row.getCell(3)),
            email: getCellText(row.getCell(4)),
            currentaddress: getCellText(row.getCell(5)),
            permanentaddress: getCellText(row.getCell(6))
        });

    });

    return data;
}
