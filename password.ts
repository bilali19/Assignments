function password(str: string): boolean {
    if (str.length < 8) {
      return false;
    }
  
    let hasUpperCase: boolean = false;
    let hasLowerCase: boolean = false;
    let hasDigit: boolean = false;
  
    for (let i = 0; i < str.length; i++) {
      const charPassword: string = str[i];
  
  
      if (charPassword !== charPassword.toLowerCase()) {
        hasUpperCase = true;
      }
  
      if (charPassword !== charPassword.toUpperCase()) {
        hasLowerCase = true;
      }
  
      if (charPassword >= '0' && charPassword <= '9') {
        hasDigit = true;
      }
  
      if (hasUpperCase && hasLowerCase && hasDigit) {
        return true;
      }
    }
  
   
    return hasUpperCase && hasLowerCase && hasDigit;
  }
  