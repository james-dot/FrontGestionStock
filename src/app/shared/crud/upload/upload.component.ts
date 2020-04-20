import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {DataModel} from '../../../shared/data.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild("fileUploadInput") //# reference dans input component.html
  fileUploadInput: any;

  @Input()
  dataModelList: DataModel[];//passer data model vers upload.html

  dataArray: any= null;

  dataModelListFiltred: any;//??

  currentStep= 1;

  dataFromServer: any = null;

  dataSentToServer: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //filter
    this.dataModelListFiltred = this.dataModelList.filter(dataModel => !dataModel.readonly);
  }

  getBindHeadersDataModelListArray(headers){
    let bindArray = [];
    let index = 0; 
    let getDataType = (header) =>{
      let dataType = '';
      this.dataModelList.forEach(dataModel =>{
          if(dataModel.columnName == header){
            dataType = dataModel.dataType;
          }
      });
        return dataType;
    };
    headers.forEach(header =>{
        const bindItem = {
          columnName : header,
          dataType: getDataType(header),
          index: index
        }
        index++;
        bindArray.push(bindItem);
    });
        return bindArray;
  }

buildDataArray(bindArray,csvRecordsArray){
      let dataArray = [];
      if(csvRecordsArray  && csvRecordsArray.length >2){
        for(let i =1 ;i<csvRecordsArray.length; i++){
          const dataCsv = csvRecordsArray[i].split(";");
          const dataCrud = {};
          bindArray.forEach(bindItem =>{
            dataCrud[bindItem.ColumnName] = bindItem.dataType == 'number' ? Number(dataCsv[bindItem.index]) : dataCsv[bindItem.index];
          });
          dataArray.push(dataCrud);
        }
      }
      return dataArray;
  }
  //selectioner un fichier
selectFile($event){
      //console.log($event.srcElement.files); :afficher le nom du fichier dans le console
      let fileList = $event.srcElement.files;
      let file = fileList[0];
      if(file && file.name.endsWith(".csv")){
        let input = $event.target;
        let reader = new FileReader();//classe javascript pour role lire des fichiers
        reader.readAsText(input.files[0]);

        reader.onload = (data) =>{
          let csvData = reader.result;
          //console.log(csvData); afficher before
          let csvRecordsArray = csvData.split(/\r\n|\n/);//???????
          //console.log(csvRecordsArray);afficher after split
          let headers = csvRecordsArray && csvRecordsArray.length > 0 ? csvRecordsArray[0].split(";") : [];
          //bing headers with dataModelList
          let bindArray = this.getBindHeadersDataModelListArray(Headers);
          //create data bindArray
          this.dataArray = this.buildDataArray(bindArray,csvRecordsArray);

          this.currentStep++; //l'importation du fichier en passe à la 2 étape
        };
      }
  }
  //envoyer les données importé au serveur
  sendDataToServer(){
      this.dataSentToServer=true;
      this.currentStep= 3;
  }
}
