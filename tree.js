// ฟังก์ชันบันทึกข้อมูลลง Local Storage
function saveTable0() {
    const table = document.getElementById('gen');
    const rows = table.rows;
    let data = [];

    for (let i = 1; i < rows.length; i++) { // เริ่มที่ 1 เพื่อข้ามหัวตาราง
        let rowData = [];
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length - 1; j++) { // ข้ามคอลัมน์สุดท้ายที่เป็นปุ่มลบ
            rowData.push(cells[j].innerText);
        }
        data.push(rowData);
    }

    localStorage.setItem('genTableData', JSON.stringify(data));
    alert('ข้อมูลถูกบันทึกแล้ว');
}

// ฟังก์ชันโหลดข้อมูลจาก Local Storage
function loadTable0() {
    const data = JSON.parse(localStorage.getItem('genTableData'));
    if (data) {
        const table = document.getElementById('gen').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        data.forEach(function(rowData) {
            const row = table.insertRow();
            rowData.forEach(function(cellData) {
                const cell = row.insertCell();
                cell.contentEditable = "true";
                cell.className = "gen";
                cell.innerText = cellData;
            });

            // เพิ่มปุ่มลบ
            const deleteCell = row.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.innerText = "ลบ";
            deleteButton.onclick = function() {
                deleteRow0(this);
            };
            deleteCell.appendChild(deleteButton);
        });
        alert('ข้อมูลถูกโหลดแล้ว');
    } else {
        alert('ไม่มีข้อมูลที่บันทึก');
    }
}





//1
function saveTable() {
    const table = document.getElementById('Tree');
    const rows = table.rows;
    let data = [];

    for (let i = 1; i < rows.length; i++) { // เริ่มที่ 1 เพื่อข้ามหัวตาราง
        let rowData = [];
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
            rowData.push(cells[j].innerText);
        }
        data.push(rowData);
    }

    localStorage.setItem('TreeTableData', JSON.stringify(data));
    alert('ข้อมูลถูกบันทึกแล้ว');
}

function loadTable() {
    const data = JSON.parse(localStorage.getItem('TreeTableData'));
    if (data) {
        const table = document.getElementById('Tree').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        data.forEach(function(rowData) {
            const row = table.insertRow();
            rowData.forEach(function(cellData) {
                const cell = row.insertCell();
                cell.contentEditable = "true";
                cell.className = "editable";
                cell.innerText = cellData;
            });
        });
        alert('ข้อมูลถูกโหลดแล้ว');
    } else {
        alert('ไม่มีข้อมูลที่บันทึก');
    }
}
 // ฟังก์ชันเพิ่มแถวในตารางและบันทึกลง Local Storage ทันที
function addRow() {
    const table = document.getElementById('Tree').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // สร้างเซลล์สำหรับแถวใหม่ (มีทั้งหมด 10 คอลัมน์ + 1 คอลัมน์สำหรับปุ่มลบ)
    for (let i = 0; i < 8; i++) {
        const newCell = newRow.insertCell();
        newCell.contentEditable = "true";
        newCell.className = "Tree";
        newCell.innerText = ""; // เซลล์ว่างเปล่า
    }

    // เพิ่มปุ่มลบ
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "ลบ";
    deleteButton.onclick = function() {
        deleteRow(this);
    };
    deleteCell.appendChild(deleteButton);

    // บันทึกข้อมูลทันทีเมื่อมีการเพิ่มแถว
    saveTable();
    alert('เพิ่มแถวใหม่แล้ว และข้อมูลถูกบันทึก');
}

// ฟังก์ชันลบแถว
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row); // ลบแถวจากตาราง

    // บันทึกข้อมูลใหม่หลังจากลบแถว
    saveTable();
    alert('แถวถูกลบแล้ว');
}

// โหลดข้อมูลจาก Local Storage เมื่อโหลดหน้าเว็บ
window.onload = function() {
    loadTable();
}


//2
function saveTable1() {
    const table = document.getElementById('bamboo');
    const rows = table.rows;
    let data = [];

    for (let i = 1; i < rows.length; i++) { // เริ่มที่ 1 เพื่อข้ามหัวตาราง
        let rowData = [];
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
            rowData.push(cells[j].innerText);
        }
        data.push(rowData);
    }

    localStorage.setItem('bambooTableData', JSON.stringify(data));
    alert('ข้อมูลถูกบันทึกแล้ว');
}


function loadTable1() {
    const data = JSON.parse(localStorage.getItem('bambooTableData'));
    if (data) {
        const table = document.getElementById('bamboo').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        data.forEach(function(rowData) {
            const row = table.insertRow();
            rowData.forEach(function(cellData) {
                const cell = row.insertCell();
                cell.contentEditable = "true";
                cell.className = "editable";
                cell.innerText = cellData;
            });
        });
        alert('ข้อมูลถูกโหลดแล้ว');
    } else {
        alert('ไม่มีข้อมูลที่บันทึก');
    }
}
 // ฟังก์ชันเพิ่มแถวในตารางและบันทึกลง Local Storage ทันที
 function addRow1() {
    const table = document.getElementById('bamboo').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // สร้างเซลล์สำหรับแถวใหม่ (มีทั้งหมด 10 คอลัมน์ + 1 คอลัมน์สำหรับปุ่มลบ)
    for (let i = 0; i < 8; i++) {
        const newCell = newRow.insertCell();
        newCell.contentEditable = "true";
        newCell.className = "bamboo";
        newCell.innerText = ""; // เซลล์ว่างเปล่า
    }

    // เพิ่มปุ่มลบ
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "ลบ";
    deleteButton.onclick = function() {
        deleteRow1(this);
    };
    deleteCell.appendChild(deleteButton);

    // บันทึกข้อมูลทันทีเมื่อมีการเพิ่มแถว
    saveTable1();
    alert('เพิ่มแถวใหม่แล้ว และข้อมูลถูกบันทึก');
}

// ฟังก์ชันลบแถว
function deleteRow1(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row); // ลบแถวจากตาราง

    // บันทึกข้อมูลใหม่หลังจากลบแถว
    saveTable1();
    alert('แถวถูกลบแล้ว');
}

// โหลดข้อมูลจาก Local Storage เมื่อโหลดหน้าเว็บ
window.onload = function() {
    loadTable1();
}



//3
function saveTable2() {
    const table = document.getElementById('waii');
    const rows = table.rows;
    let data = [];

    for (let i = 1; i < rows.length; i++) { // เริ่มที่ 1 เพื่อข้ามหัวตาราง
        let rowData = [];
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
            rowData.push(cells[j].innerText);
        }
        data.push(rowData);
    }

    localStorage.setItem('waiiTableData', JSON.stringify(data));
    alert('ข้อมูลถูกบันทึกแล้ว');
}


function loadTable2() {
    const data = JSON.parse(localStorage.getItem('waiiTableData'));
    if (data) {
        const table = document.getElementById('waii').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        data.forEach(function(rowData) {
            const row = table.insertRow();
            rowData.forEach(function(cellData) {
                const cell = row.insertCell();
                cell.contentEditable = "true";
                cell.className = "editable";
                cell.innerText = cellData;
            });
        });
        alert('ข้อมูลถูกโหลดแล้ว');
    } else {
        alert('ไม่มีข้อมูลที่บันทึก');
    }
}

 // ฟังก์ชันเพิ่มแถวในตารางและบันทึกลง Local Storage ทันที
 function addRow2() {
    const table = document.getElementById('waii').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // สร้างเซลล์สำหรับแถวใหม่ (มีทั้งหมด 10 คอลัมน์ + 1 คอลัมน์สำหรับปุ่มลบ)
    for (let i = 0; i < 5; i++) {
        const newCell = newRow.insertCell();
        newCell.contentEditable = "true";
        newCell.className = "waii";
        newCell.innerText = ""; // เซลล์ว่างเปล่า
    }

    // เพิ่มปุ่มลบ
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "ลบ";
    deleteButton.onclick = function() {
        deleteRow2(this);
    };
    deleteCell.appendChild(deleteButton);

    // บันทึกข้อมูลทันทีเมื่อมีการเพิ่มแถว
    saveTable2();
    alert('เพิ่มแถวใหม่แล้ว และข้อมูลถูกบันทึก');
}

// ฟังก์ชันลบแถว
function deleteRow2(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row); // ลบแถวจากตาราง

    // บันทึกข้อมูลใหม่หลังจากลบแถว
    saveTable2();
    alert('แถวถูกลบแล้ว');
}

// โหลดข้อมูลจาก Local Storage เมื่อโหลดหน้าเว็บ
window.onload = function() {
    loadTable2();
}



//4
function saveTable3() {
    const table = document.getElementById('sap');
    const rows = table.rows;
    let data = [];

    for (let i = 1; i < rows.length; i++) { // เริ่มที่ 1 เพื่อข้ามหัวตาราง
        let rowData = [];
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
            rowData.push(cells[j].innerText);
        }
        data.push(rowData);
    }

    localStorage.setItem('sapTableData', JSON.stringify(data));
    alert('ข้อมูลถูกบันทึกแล้ว');
}


function loadTable3() {
    const data = JSON.parse(localStorage.getItem('sapTableData'));
    if (data) {
        const table = document.getElementById('sap').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        data.forEach(function(rowData) {
            const row = table.insertRow();
            rowData.forEach(function(cellData) {
                const cell = row.insertCell();
                cell.contentEditable = "true";
                cell.className = "editable";
                cell.innerText = cellData;
            });
        });
        alert('ข้อมูลถูกโหลดแล้ว');
    } else {
        alert('ไม่มีข้อมูลที่บันทึก');
    }
}
// ฟังก์ชันเพิ่มแถวในตารางและบันทึกลง Local Storage ทันที
function addRow3() {
    const table = document.getElementById('sap').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // สร้างเซลล์สำหรับแถวใหม่ (มีทั้งหมด 10 คอลัมน์ + 1 คอลัมน์สำหรับปุ่มลบ)
    for (let i = 0; i < 8; i++) {
        const newCell = newRow.insertCell();
        newCell.contentEditable = "true";
        newCell.className = "sap";
        newCell.innerText = ""; // เซลล์ว่างเปล่า
    }

    // เพิ่มปุ่มลบ
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "ลบ";
    deleteButton.onclick = function() {
        deleteRow3(this);
    };
    deleteCell.appendChild(deleteButton);

    // บันทึกข้อมูลทันทีเมื่อมีการเพิ่มแถว
    saveTable3();
    alert('เพิ่มแถวใหม่แล้ว และข้อมูลถูกบันทึก');
}

// ฟังก์ชันลบแถว
function deleteRow3(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row); // ลบแถวจากตาราง

    // บันทึกข้อมูลใหม่หลังจากลบแถว
    saveTable3();
    alert('แถวถูกลบแล้ว');
}

// โหลดข้อมูลจาก Local Storage เมื่อโหลดหน้าเว็บ
window.onload = function() {
    loadTable3();
}



//5
function saveTable4() {
    const table = document.getElementById('seed');
    const rows = table.rows;
    let data = [];

    for (let i = 1; i < rows.length; i++) { // เริ่มที่ 1 เพื่อข้ามหัวตาราง
        let rowData = [];
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length - 1; j++) { // ข้ามคอลัมน์สุดท้ายที่เป็นปุ่มลบ
            rowData.push(cells[j].innerText);
        }
        data.push(rowData);
    }

    localStorage.setItem('seedTableData', JSON.stringify(data));
    alert('ข้อมูลถูกบันทึกแล้ว');
}

function loadTable4() {
    const data = JSON.parse(localStorage.getItem('seedTableData'));
    if (data) {
        const table = document.getElementById('seed').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        data.forEach(function(rowData) {
            const row = table.insertRow();
            rowData.forEach(function(cellData) {
                const cell = row.insertCell();
                cell.contentEditable = "true";
                cell.className = "editable";
                cell.innerText = cellData;
            });

            // เพิ่มปุ่มลบ
            const deleteCell = row.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.innerText = "ลบ";
            deleteButton.onclick = function() {
                deleteRow4(this);
            };
            deleteCell.appendChild(deleteButton);
        });
        alert('ข้อมูลถูกโหลดแล้ว');
    } else {
        alert('ไม่มีข้อมูลที่บันทึก');
    }
}

function addRow4() {
    const table = document.getElementById('seed').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // สร้างเซลล์สำหรับแถวใหม่ (มีทั้งหมด 6 คอลัมน์ + 1 คอลัมน์สำหรับปุ่มลบ)
    for (let i = 0; i < 6; i++) {
        const newCell = newRow.insertCell();
        newCell.contentEditable = "true";
        newCell.innerText = ""; // เซลล์ว่างเปล่า
    }

    // เพิ่มปุ่มลบ
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "ลบ";
    deleteButton.onclick = function() {
        deleteRow4(this);
    };
    deleteCell.appendChild(deleteButton);

    saveTable4();
    alert('เพิ่มแถวใหม่แล้ว และข้อมูลถูกบันทึก');
}

function deleteRow4(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    saveTable4();
    alert('แถวถูกลบแล้ว');
}

window.onload = function() {
    loadTable4();
};

///ส่งออก


function exportTableDataToPDF() {
    // ดึงข้อมูลจาก Local Storage โดยแต่ละคีย์
    const genData = JSON.parse(localStorage.getItem('genTableData')) || [];
    const treeData = JSON.parse(localStorage.getItem('TreeTableData')) || [];
    const waiiData = JSON.parse(localStorage.getItem('waiiTableData')) || [];
    const sapData = JSON.parse(localStorage.getItem('sapTableData')) || [];
    const seedData = JSON.parse(localStorage.getItem('seedTableData')) || [];

    // รวมข้อมูลทั้งหมด
    const allData = [
        { title: "GENERAL DATA", data: genData },
        { title: "TREE DATA", data: treeData },
        { title: "WAI DATA", data: waiiData },
        { title: "SAP DATA", data: sapData },
        { title: "SEED DATA", data: seedData }
    ];

    if (allData.length > 0) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        let y = 10; // เริ่มต้นตำแหน่ง Y สำหรับข้อความ

        allData.forEach(section => {
            const { title, data } = section;
            if (data && data.length > 0) {
                doc.text(title, 10, y); // ใส่ชื่อหัวข้อ
                y += 10;

                // วนลูปข้อมูลและเพิ่มลงในไฟล์ PDF
                data.forEach((row, index) => {
                    doc.text(`Row ${index + 1}: ${row.join(', ')}`, 10, y);
                    y += 10;
                    if (y > 280) { // ถ้าเกินความสูงของหน้า ให้เพิ่มหน้าใหม่
                        doc.addPage();
                        y = 10;
                    }
                });

                y += 10; // เว้นบรรทัดหลังจากจบแต่ละเซ็ตข้อมูล
            }
        });

        doc.save('All_Data.pdf');
    } else {
        alert('ไม่มีข้อมูลใน Local Storage');
    }
}
