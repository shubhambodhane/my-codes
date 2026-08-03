// "server-only";
"use server";

export async function ServerSideFunction() {
  console.log(
    "Executing on server side contains db connection,protect sensitive information,use environment variable",
  );
  return "server result";
}
