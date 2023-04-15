interface User {
  token: number;
  name: string;
}

class MainViewModel {
  user: User | null;

  constructor() {
    this.user = null;
  }

  getUser(){
    return this.user;
  }

  setUser(user: User){
    this.user = user;
  }
}

export default new MainViewModel();