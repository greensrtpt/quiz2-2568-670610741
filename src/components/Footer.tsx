import { type FooterProps } from "../libs/Footer";
import { Text, Group } from "@mantine/core";
export default function Footer({fullName, studentId ,year}: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © CPE207-2025 {fullName} {studentId} {year} All rights reserved.
      </Text>
    </Group>
  );
}
