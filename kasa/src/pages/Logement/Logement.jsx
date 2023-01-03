import { useParams } from "react-router-dom";
import Carroussel from "../../components/Carroussel/Carroussel";

function FicheLogement() {
    const { logementId } = useParams();
    return (
      <>
        <Carroussel />
      </>
    );
  }
  
  export default FicheLogement;  