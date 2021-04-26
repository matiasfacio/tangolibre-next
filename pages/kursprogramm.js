import { Section, Header } from "../styles/globalstyles";
function kursprogramm() {
  return (
    <Section theme={"Kursprogramm"}>
      <table>
        <thead>
          <th>Uhr</th>
          <th>Montag</th>
          <th>Dienstag</th>
          <th>Mittwoch</th>
          <th>Donnerstag</th>
          <th>Freitag</th>
        </thead>
        <tbody>
          <td id ="time">
            <tr>19.00</tr>
            <tr>19.30</tr>
            <tr>20.00</tr>
            <tr>20.30</tr>
            <tr>21.00</tr>
            <tr>22.00</tr>
          </td>
          <td>
            <tr>Einsteiger</tr>
            <tr>""</tr>
            <tr></tr>
            <tr>Mittelstufe</tr>
            <tr>""</tr>
            <tr>""</tr>
          </td>
          <td>
            <tr>Mittelstufe</tr>
            <tr>""</tr>
            <tr>""</tr>
            <tr>Mittelstufe/Fortgeschrittene</tr>
            <tr>""</tr>
            <tr>""</tr>
          </td>
          <td>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>Mittelstufe/Fortgeschrittene</tr>
            <tr>""</tr>
            <tr>""</tr>
          </td>
          <td>
            <tr>Mittelstufe/Fortgeschrittene</tr>
            <tr>""</tr>
            <tr>""</tr>
            <tr>Einsteiger</tr>
            <tr>""</tr>
            <tr>""</tr>
          </td>
          <td>
            <tr>Einsteiger</tr>
            <tr>""</tr>
            <tr>Praktika</tr>
            <tr>""</tr>
            <tr>""</tr>
            <tr>""</tr>
          </td>
        </tbody>
      </table>
    </Section>
  );
}

export default kursprogramm;
