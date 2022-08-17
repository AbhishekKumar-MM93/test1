import bcrypt from 'bcrypt'
let password = "$2b$10$zP.1dxCXZugs9veYAGAr/.5zR/oxHwxIAXCF1SHdUrxkUDEIcwpRe"
// let salt=await bcrypt.genSalt(10);
// let hash=await bcrypt.hash("abhi123",salt);
// console.log(hash)
let result = await bcrypt.compare('abhi12', password);
if (result) {
    console.log("password verified Successfully")
} else {
    console.log("Invalid Password")
}