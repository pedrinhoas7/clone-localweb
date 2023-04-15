interface User {
  token: number;
  name: string;
}

class MainViewModel {
  users: User | null;

  constructor() {
    this.users = null;
  }

  getUser(){
    return this.users;
  }

  setUser(user: User){
    this.users = user;
  }
}

export default new MainViewModel();