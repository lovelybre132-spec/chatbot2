import prompt from "prompt-sync";
const input = prompt();
import dotenv from "dotenv";
dotenv.config();

const apiAccount = process.env.API_CLOUD_FARE_ACCOUNT;
const apiToken = process.env.API_CLOUD_FARE_TOKEN;
const apiModel = process.env.API_CLOUD_FARE_MODEL;

console.log( {
    apiAccount,
    apiToken,
    apiModel
} )

let info ="";

while (info != "exit"){

    info = input("Enter anything: ")
    console.log(info)

}

async function run(model, input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/b95131d5f1f9ea74aecec4dc61730ea5/ai/run/${model}`,
    {
      headers: { Authorization: "Bearer {API_TOKEN}" },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}


console.log("out of the loop");