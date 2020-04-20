import { Component, OnInit, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import {DataModel} from '../../../shared/data.model';
import {CrudService} from '../../crud.service';


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

  @Output()
  updateData: EventEmitter<any> = new EventEmitter<any>();

  dataArray: any= null;

  dataModelListFiltred: any;//??

  currentStep= 1;

  selectedStep = 1;//l'étape d'importé et l'envoyer du ficher 

  dataFromServer: any = null;

  dataSentToServer: boolean = false;

  fileName: string = '';//le nom du fichier importé

  @Input()
  service: CrudService;//methode addAll

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
        this.fileName= file.name;//le nom du fichier
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
  //envoyer les données importée au serveur
  sendDataToServer(){
      this.service.addAll(this.dataArray).subscribe((data)=>{
        this.dataFromServer=data;
        this.dataSentToServer=true;
        this.updateData.emit(data);
        this.currentStep= 3;
      });
  }
}
