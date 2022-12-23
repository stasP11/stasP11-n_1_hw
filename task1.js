import process from "process";

function showReverseString(string) {
  const result = string.split("").reverse().join("");
  process.stdout.write(result + '\n '+ '\n '+ '\n ');
}

process.stdin.on( "data", (string) => {
  showReverseString(string.toString());
});
