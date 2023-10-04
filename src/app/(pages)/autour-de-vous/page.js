import LeafletTown from "../../../components/Leaflet/LeafletTown/LeafletTown";
import LeafletWalks from "../../../components/Leaflet/LeafletWalks/LeafletWalks";

export default function Autour({ children }) {
  return (
    <div>
      <LeafletTown />
      <LeafletWalks />
    </div>
  );
}
