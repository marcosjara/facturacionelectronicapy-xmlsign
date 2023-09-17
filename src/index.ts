import dsigJava from "./XMLDsigJava";
import dsigNode from "./XMLDsigNode";

class DESign {
  signXML = (xml: string, file: any, password: any): Promise<any> => {
    return dsigJava.signDocument(xml, "DE", file, password);
    //return dsigNode.signDocument([xml], "DE", file, password);

  };
  signXMLFiles = (xmls: Array<any>, file: any, password: any): Promise<any> => {
    return dsigJava.signDocuments(xmls, "DE", file, password);
    //return dsigNode.signDocument(xmls, "DE", file, password);
  };

  signXMLFilesNode = (xmls: Array<any>, file: any, password: any): Promise<any> => {
    //return dsigJava.signDocuments(xmls, "DE", file, password);
    return dsigNode.signDocument(xmls, "DE", file, password);
  };

  signXMLEvento = (xml: string, file: any, password: any): Promise<any> => {
    return dsigJava.signEvento(xml, "rEve", file, password);
    //return dsigNode.signDocument([xml], "DE", file, password);
  };

  signXMLRecibo = (xml: string, file: any, password: any): Promise<any> => {
    return dsigJava.signDocument(xml, "recibo", file, password);
    //return dsigNode.signDocument([xml], "DE", file, password);

  };

  getExpiration = (file: any, password: any): Promise<any> => {
    return dsigJava.getExpiration(file, password);
  };
}

export default new DESign();
