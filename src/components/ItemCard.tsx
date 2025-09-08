import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type ExpenseProps = {
  name: string;
  amount: number | string;
  category: string;
  onDelete: () => void;
};

export default function ItemCard() {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
    const deleteTask = (taskId: string) => {
      Card:  "1",
      Group: "Read a book", 
    },
  // ใช้ filter คัดทิ้ง task ที่ id ตรงกับ taskId
  const deleteTask = (taskId: string) => {
  setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };
    
  //let val_number: number = Number("500.0");
  //console.log(val_number + 100); // 600.0

  return {
    /* Type additional text here. */
    
};
//}

//สร้างItem list
//card:ทุกอย่าง
//group จัดเลเอ้า
//badge ประเภทหมวดอาหาร
//ActionIcon ไอคอนสวย
//text แสดงข้อความ  ✅
//แสดงข้อความ รายการ,เงิน,หมวดหมู่
//แสดงไอคอน และฟังก์ชัน delete
