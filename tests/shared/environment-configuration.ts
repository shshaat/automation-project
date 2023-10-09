
export class Config {
    boPort:string = '8090';
    MedPort:string = '8090';
    loginUser: string = 'emp';
    loginPassword: string = '123456'
  //  envUrl='http://backoffice-systemtest.andalusiagroup.net:';   // system test 
    envUrl='http://backoffice-prelive.andalusiagroup.net:';
    baseUrl: string = this.envUrl+this.MedPort;
    DashURL:string=this.envUrl+this.MedPort+'/dashboard';



}
