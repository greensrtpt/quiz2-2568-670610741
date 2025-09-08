import { Outlet } from "react-router-dom";
import { AppShell, ComboboxFooter } from "@mantine/core";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import { useDisclosure } from "@mantine/hooks";


export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Footer>
        <FooterComponent
          year="2025"           // ปีที่แสดงในลิขสิทธิ์/ข้อความส่วนท้าย
          fullName="Sireethorn" // ชื่อ-นามสกุล (ตามข้อ 4 ของโจทย์: ให้ระบุไว้หลังข้อความ Copyright)
          studentId="670610741" // รหัสนักศึกษา
        />
      </AppShell.Footer>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
    
  );
}
