customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]

function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for(let i = 0 ; i < customers.length; i++)
    for(let j = 0 ; j < customers.length - i - 1 ; j++){
      if(customers[j] > customers[j+1]){
        let temp = customers[j]
        customers[j] = customers[j+1]
        customers[j+1] = temp
      }
    }
    return customers
}

console.log(sortCustomerName(customers));

// ตอบคำถามตรงนี้จ้า
//bubble sort มี bigO เป็น O(n**2) เนื่องจากเป็น loop ซ้อน loop ่ในชุดข้อมูลเดิม ดังนั้นจำนวนลูปจึงเพิ่มขึ้นตามจำนวนข้อมูล
//ในลักษณะของ n * n เช่น วนลูปที่ i = 0 แล้วจะวนลูปต่อด้วย j = 0 จนถึงค่าที่กำหนดในเงื่อนไขซึ่งจำนวนลูปของ j จะลดลงเรื่อยๆเพระาไม่ต้องการ
//ให้ เช็คตัวที่ sorted ไปแล้ว เมื่อพล็อตกราฟความสัมพันธ์ระหว่างจำนวนข้อมูลและจำนวน loop ที่เกิดขึ้นจะมีลักษณะกราฟโค้งที่ค่อยๆมีความชันมากขึ้น 
// ซึ่งเป็นลักษณะของ exponential graph 
