import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

//TexInput //รายการจ่าย 0 “Expense Name is required”✅
//NumberLnput  //ขั้นต่ำ 0 “Amount is required”  ✅
//Select (3 ประเภท) //“Food” , “Transport”,”Entertainment”✅
//Amount ยัง
type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {};

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0
  return ( 
  <div
      className="modal fade"
      id="modalregister"                 // id ของ modal (ใช้จับกับ data-bs-target จากหน้าอื่น)
      data-bs-backdrop="static"          // คลิกพื้นหลังไม่ปิด modal (กันเผลอปิด)
      data-bs-keyboard="false"           // กด ESC ไม่ปิด modal
      tabIndex={-1}
      aria-labelledby="modalregisterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {/* ส่วนหัวโมดัล */}
          <div className="modal-header">
            <h5 className="modal-title">Add Expense</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"     // ปิด modal แบบ Bootstrap
              aria-label="Close"
            ></button>
          </div>

          {/* เนื้อหาโมดัล */}
          <div className="modal-body">
            {/* First name & Last name */}
            <div className="d-flex gap-2">
              <div>
                <label className="form-label">Expense Name</label>
                <input
              //    className={"form-control" + (lnameError ? " is-invalid" : "")}
               //   onChange={inputLnameOnChange} // แก้ไขแล้วล้าง error ← ข้อ 1.2
               //   value={lname}
                />
                <div className="invalid-feedback">Invalid last name</div>
              </div>
            </div>

            {/* Plan */}
            <div className="mt-2">
              <label className="form-label">Plan</label>
              <select
               // className={"form-select" + (planError ? " is-invalid" : "")}
              //  onChange={selectPlanOnChange} // เปลี่ยนแล้วล้าง error ← ข้อ 1.2
              //  value={plan}
              >
                <option value="">Please select..</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              {/* ข้อความเตือนของ select ใช้ invalid-feedback ตาม Bootstrap //Select (3 ประเภท) //“Food” , “Transport”,”Entertainment”← ข้อ 1.1 */}
              <div className="invalid-feedback">Please select a Plan</div>
            </div>


          </div>

            <button
              className="btn btn-success my-2"
             // onClick={registerBtnOnClick}
              //disabled={!isUserAgreed} // ไม่ยอมรับเงื่อนไข → ปุ่มถูกปิด
            >
              Submit
            </button>
      
        </div>
      </div>
    </div>
  );
}



   