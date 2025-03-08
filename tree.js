function saveData() {
    const data = {
        projectId: document.getElementById('projectId').value,
        plot: document.getElementById('plot').value,
        measurementDate: document.getElementById('measurementDate').value,
        gpsMap: document.getElementById('gpsMap').value,
        gpsSite: document.getElementById('gpsSite').value,
        nameCode: document.getElementById('nameCode').value,
        plotId: document.getElementById('plotId').value,
        sampleLocation: document.getElementById('sampleLocation').value,
        gpsDatum: document.getElementById('gpsDatum').value,
        mapSeries: document.getElementById('mapSeries').value,
        mapSheetNo: document.getElementById('mapSheetNo').value,
        provinceCode: document.getElementById('provinceCode').value,
        gpsCampSite: document.getElementById('gpsCampSite').value,
        landUse: [],
        weather: document.getElementById('weather').value,
        campSite: document.getElementById('campSite').value,
        gpsTrack: document.getElementById('gpsTrack').value,
        accessNotes: document.getElementById('accessNotes').value,
        comments: document.getElementById('comments').value,
        Licahen : document.getElementById('Licahen').value,
        Moss: document.getElementById('Moss').value,
        Undergrowth : document.getElementById('Undergrowth').value
    };

    // เก็บข้อมูล Land Use
    const landUseRows = document.querySelectorAll('#g3 tbody tr');
    landUseRows.forEach(row => {
        const code = row.children[0].children[0].value;
        const description = row.children[1].children[0].value;
        const cover = row.children[2].children[0].value;
        if (code || description || cover) {
            data.landUse.push({ code, description, cover });
        }
    });

    // บันทึกข้อมูลลงใน Local Storage
    localStorage.setItem('formData', JSON.stringify(data));

    // บันทึกข้อมูลตาราง Tree
    saveTableData('Tree', 'TreeTableData');

    // บันทึกข้อมูลตาราง Seed
    saveTableData('seed', 'seedTableData');

    // บันทึกข้อมูลตาราง bamm
    saveTableData('bamm', 'bammTableData');

    alert('ข้อมูลทั้งหมดถูกบันทึกลงใน Local Storage!');
}

// ฟังก์ชันบันทึกข้อมูลของตาราง (ใช้ได้ทั้ง Tree และ Seed)
function saveTableData(tableId, storageKey) {
    const table = document.getElementById(tableId);
    const rows = table.rows;
    let tableData = [];

    for (let i = 1; i < rows.length; i++) { // เริ่มที่ 1 เพื่อข้ามหัวตาราง
        let rowData = [];
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length - 1; j++) { // -1 เพื่อไม่รวมเซลล์ปุ่มลบ
            rowData.push(cells[j].innerText);
        }
        tableData.push(rowData);
    }

    localStorage.setItem(storageKey, JSON.stringify(tableData));
}





///////


// เพิ่มแถวในตาราง Tree
function addRow() {
    addTableRow('Tree', 19);
}

// เพิ่มแถวในตาราง Seed
function addRow1() {
    addTableRow('seed', 8);
}

// เพิ่มแถวในตาราง Seed
function addRow2() {
    addTableRow('bamm', 16);
}


// ฟังก์ชันเพิ่มแถวสำหรับตารางใดๆ
function addTableRow(tableId, colCount) {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
        const newCell = newRow.insertCell();
        newCell.contentEditable = "true";
        newCell.className = tableId;
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

    saveData();
    alert(`เพิ่มแถวใหม่ในตาราง ${tableId} แล้ว และข้อมูลถูกบันทึก`);
}


////////

function deleteRow(button) {
    const row = button.parentNode.parentNode; // หาค่าแถวที่มีปุ่มลบ
    row.parentNode.removeChild(row); // ลบแถวออกจากตาราง

    // บันทึกข้อมูลใน Local Storage หลังจากลบแถว
    saveData();
    alert('แถวถูกลบแล้ว และข้อมูลถูกบันทึก');
}


//////


// ฟังก์ชันสำหรับโหลดข้อมูลทั้งหมด
function loadTable() {
    // โหลดข้อมูลฟอร์มจาก Local Storage
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        document.getElementById('projectId').value = formData.projectId || '';
        document.getElementById('plot').value = formData.plot || '';
        document.getElementById('measurementDate').value = formData.measurementDate || '';
        document.getElementById('gpsMap').value = formData.gpsMap || '';
        document.getElementById('gpsSite').value = formData.gpsSite || '';
        document.getElementById('nameCode').value = formData.nameCode || '';
        document.getElementById('plotId').value = formData.plotId || '';
        document.getElementById('sampleLocation').value = formData.sampleLocation || '';
        document.getElementById('gpsDatum').value = formData.gpsDatum || '';
        document.getElementById('mapSeries').value = formData.mapSeries || '';
        document.getElementById('mapSheetNo').value = formData.mapSheetNo || '';
        document.getElementById('provinceCode').value = formData.provinceCode || '';
        document.getElementById('gpsCampSite').value = formData.gpsCampSite || '';
        document.getElementById('weather').value = formData.weather || '';
        document.getElementById('campSite').value = formData.campSite || '';
        document.getElementById('gpsTrack').value = formData.gpsTrack || '';
        document.getElementById('accessNotes').value = formData.accessNotes || '';
        document.getElementById('comments').value = formData.comments || '';
        document.getElementById('Licahen').value = formData.Licahen || '';
        document.getElementById('Moss').value = formData.Moss || '';
        document.getElementById('Undergrowth').value = formData.Undergrowth || '';

        // โหลดข้อมูล Land Use ลงในตาราง #g3
        if (formData.landUse && formData.landUse.length > 0) {
            const landUseTable = document.getElementById('g3').getElementsByTagName('tbody')[0];
            landUseTable.innerHTML = ''; // ล้างข้อมูลเก่าออกก่อน
            formData.landUse.forEach(rowData => {
                const row = landUseTable.insertRow();
                const codeCell = row.insertCell();
                const descriptionCell = row.insertCell();
                const coverCell = row.insertCell();

                codeCell.innerHTML = `<input type="text" value="${rowData.code}" />`;
                descriptionCell.innerHTML = `<input type="text" value="${rowData.description}" />`;
                coverCell.innerHTML = `<input type="text" value="${rowData.cover}" />`;
            });
        } else {
            alert('ไม่มีข้อมูล Land Use ที่บันทึก');
        }
    } else {
        alert('ไม่มีข้อมูลฟอร์มที่บันทึก');
    }

    // โหลดข้อมูลตาราง Tree
    const treeData = JSON.parse(localStorage.getItem('TreeTableData'));
    if (treeData) {
        loadTableData('Tree', treeData);
    } else {
        alert('ไม่มีข้อมูล Tree ที่บันทึก');
    }

    // โหลดข้อมูลตาราง Seed
    const seedData = JSON.parse(localStorage.getItem('seedTableData'));
    if (seedData) {
        loadTableData('seed', seedData);
    } else {
        alert('ไม่มีข้อมูล Seed ที่บันทึก');
    }

    // โหลดข้อมูลตาราง bamm
    const bammData = JSON.parse(localStorage.getItem('bammTableData'));
    if (bammData) {
        loadTableData('bamm', bammData);
    } else {
        alert('ไม่มีข้อมูล bamm ที่บันทึก');
    }

    alert('ข้อมูลทั้งหมดถูกโหลดแล้ว!');
}

// ฟังก์ชันโหลดข้อมูลของตาราง (ใช้ได้ทั้ง Tree และ Seed)
function loadTableData(tableId, tableData) {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // ล้างข้อมูลเก่าในตารางก่อน

    tableData.forEach(function(rowData) {
        const row = table.insertRow();

        // สร้างเซลล์ที่สามารถแก้ไขได้
        rowData.forEach(function(cellData) {
            const cell = row.insertCell();
            cell.contentEditable = "true";
            cell.className = "editable";
            cell.innerText = cellData;
        });

        // สร้างเซลล์สำหรับปุ่มลบ
        const deleteCell = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "ลบ";
        deleteButton.onclick = function() {
            deleteRow(this);
        };
        deleteCell.appendChild(deleteButton);
    });
}

function exportExcel() {
    const data = JSON.parse(localStorage.getItem('formData'));
    if (!data) {
        alert('ไม่มีข้อมูลใน Local Storage!');
        return;
    }

    const workbook = XLSX.utils.book_new();

    // สร้างชีตสำหรับข้อมูลทั่วไป
    const generalInfo = [
        ['Project ID', 'Plot', 'Measurement Date', 'GPS Plot Centre Map', 'GPS Plot Centre Site', 'Name (Code)', 'Plot ID'],
        [data.projectId, data.plot, data.measurementDate, data.gpsMap, data.gpsSite, data.nameCode, data.plotId]
    ];
    const generalInfoSheet = XLSX.utils.aoa_to_sheet(generalInfo);
    XLSX.utils.book_append_sheet(workbook, generalInfoSheet, 'General Info');

    // สร้างชีตสำหรับข้อมูลตัวอย่าง
    const sampleInfo = [
        ['Sample Location & Data ID', 'GPS DATUM', 'Map Series', 'Map Sheet No.', 'Province Code', 'GPS Camp Site'],
        [data.sampleLocation, data.gpsDatum, data.mapSeries, data.mapSheetNo, data.provinceCode, data.gpsCampSite]
    ];
    const sampleInfoSheet = XLSX.utils.aoa_to_sheet(sampleInfo);
    XLSX.utils.book_append_sheet(workbook, sampleInfoSheet, 'Sample Info');

    // สร้างชีตสำหรับข้อมูลการใช้ที่ดิน
    const landUse = [['Land Use Code', 'Description', '% Cover']];
    data.landUse.forEach(item => {
        landUse.push([item.code, item.description, item.cover]);
    });
    const landUseSheet = XLSX.utils.aoa_to_sheet(landUse);
    XLSX.utils.book_append_sheet(workbook, landUseSheet, 'Land Use');

    // สร้างชีตสำหรับข้อมูลเพิ่มเติม
    const additionalInfo = [
        ['Weather', 'Camp Site', 'GPS Track File Name', 'Access Notes', 'Comments'],
        [data.weather, data.campSite, data.gpsTrack, data.accessNotes, data.comments]
    ];
    const additionalInfoSheet = XLSX.utils.aoa_to_sheet(additionalInfo);
    XLSX.utils.book_append_sheet(workbook, additionalInfoSheet, 'Additional Info');
    
    console.log(localStorage.getItem('formData'));
    console.log(localStorage.getItem('TreeTableData'));
    console.log(localStorage.getItem('seedTableData'));
    console.log(localStorage.getItem('bammTableData'));
    
    const treeData = JSON.parse(localStorage.getItem('TreeTableData')) || [];
    const seedData = JSON.parse(localStorage.getItem('seedTableData')) || [];
    const bammData = JSON.parse(localStorage.getItem('bammTableData')) || [];
    
    // สร้างชีตสำหรับข้อมูล Tree
    const treeHeaders = ["Item No.", "Spicies Name", "Spicies Code", "Azimuth (°)", "Distance (m)", "Live / Dead", "Stand / Fall", "GBH (cm) (>= 15 )", "M / E", "ToTal Height (m)", "M / E", "Number of Logs", "Timber Quality (1*)", "Crown Class (2*)", "Crown Condition (3*)", "Crown Hight (m)", "Lichen Loading (%)", "Orchid (Y/N)", "Remark"]; // ใส่หัวตารางที่ถูกต้อง
    const treeSheetData = [treeHeaders, ...treeData]; // รวมหัวตารางกับข้อมูล
    const treeSheet = XLSX.utils.aoa_to_sheet(treeSheetData);
    XLSX.utils.book_append_sheet(workbook, treeSheet, 'Tree Data');

    // สร้างชีตสำหรับข้อมูล Seed
    const seedHeaders = ["% Cover Licahen", "% Cover Moss", "% Cover Undergrowth", "Item No.","Spicies Name","Spicies Code","Number of Seeding (Undergrowth > 1.3 Tall) N","Number of Seeding (Undergrowth > 1.3 Tall) ","Number of Seeding (Undergrowth > 1.3 Tall) S","Number of Seeding (Undergrowth > 1.3 Tall) W","Number of Saplings Undergrowth >= 1.3 m , GBH < 15 cm"]; // ใส่หัวตารางที่ถูกต้อง
    const seedSheetData = [seedHeaders, ...seedData]; // รวมหัวตารางกับข้อมูล
    const seedSheet = XLSX.utils.aoa_to_sheet(seedSheetData);
    XLSX.utils.book_append_sheet(workbook, seedSheet, 'Seed Data');

    // สร้างชีตสำหรับข้อมูล Bamm
    const bammHeaders = ["Item No.", "Spicies Nam", "Spicies Code", "B : Number of Culums ", "B : Ave. GBH (cm)", "B : Ave. Lenght (m)", "E : Number of Stems", "E : Min. GBH (cm)", "E : Max. GBH (cm)", "E : Ave. GBH (cm)", "E : Ave. Lenght (m)", "T : Girth (cm)", "T : Height (cm)", "Old / New", "Live / Dead", "Remark"]; // ใส่หัวตารางที่ถูกต้อง
    const bammSheetData = [bammHeaders, ...bammData]; // รวมหัวตารางกับข้อมูล
    const bammSheet = XLSX.utils.aoa_to_sheet(bammSheetData);
    XLSX.utils.book_append_sheet(workbook, bammSheet, 'Bamm Data');

    // บันทึกไฟล์ Excel
    XLSX.writeFile(workbook, 'General Information.xlsx');
}




// ฟังก์ชันดึงพิกัด GPS และแสดงผลในช่องอินพุต
function getLocation(button) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => showPosition(position, button),
            showError,
            { enableHighAccuracy: true } // เพิ่มความแม่นยำ
        );
    } else {
        alert("เบราว์เซอร์ของคุณไม่รองรับ Geolocation");
    }
}

// ฟังก์ชันแปลงมุมองศาเป็นทิศทาง
function getDirection(heading) {
    if (heading === null || isNaN(heading)) return "N/A"; // กรณีไม่มีค่าทิศ
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    const index = Math.round(heading / 45);
    return directions[index];
}

// ฟังก์ชันใส่ค่าพิกัดลงในช่องที่กดปุ่ม
function showPosition(position, button) {
    const latitude = position.coords.latitude.toFixed(6);
    const longitude = position.coords.longitude.toFixed(6);
    const heading = position.coords.heading; // มุมองศา
    const direction = getDirection(heading); // แปลงมุมเป็นทิศ

    const gpsText = `${latitude}, ${longitude} (${direction})`; // แสดงพิกัดพร้อมทิศ

    // หาช่องอินพุตที่อยู่ก่อนหน้าปุ่ม
    const inputField = button.previousElementSibling;
    if (inputField && inputField.tagName === "INPUT") {
        inputField.value = gpsText;
    }
}

// ฟังก์ชันแสดงข้อผิดพลาด
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("ผู้ใช้ปฏิเสธการเข้าถึงตำแหน่งที่ตั้ง");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("ไม่สามารถดึงข้อมูลตำแหน่งที่ตั้งได้");
            break;
        case error.TIMEOUT:
            alert("หมดเวลาการร้องขอพิกัด");
            break;
        case error.UNKNOWN_ERROR:
            alert("เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ");
            break;
    }
}
