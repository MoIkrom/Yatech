const subArray = (a, m, k) => {
  // Inisialisasi nilai hasil
  let hasil = 0;

  // melakukan looping pada array a dengan cara membagi array menjadi subarray berukuran m, kemudian ditampung di variabel newArray
  for (let i = 0; i <= a.length - m; i++) {
    let newArray = a.slice(i, i + m);
    let found = false;

    for (let j = 0; j < newArray.length - 1; j++) {
      // melakukan looping pada sub array untuk mencari pasangan angka yang jumlahnya sama dengan k.
      for (let l = j + 1; l < newArray.length; l++) {
        // Jika ditemukan pasangan angka yang sesuai dengan nilai k, maka akan berhenti looping dan ditandai subarray tersebut dengan variabel found .
        if (newArray[j] + newArray[l] === k) {
          found = true;
          break;
        }
      }
      // Jika ditemukan subarray sesuai dengan kriteria, maka akan berhenti looping dan ditandai subarray tersebut dengan variabel found .
      if (found) break;
    }
    // Jika ditemukan subarray sesuai dengan kriteria, maka akan berhenti looping dan menghitung berapa banyak jumlah subarray
    if (found) hasil++;
  }

  return hasil;
};

// =================================================================================

// Example 1 , Output ini hasil nya : 5
const a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
const m = 4;
const k = 10;

// Example 2 , Output ini hasil nya : 2
// const a = [15, 8, 8, 2, 6, 4, 1, 7];
// const m = 2;
// const k = 8;

console.log(subArray(a, m, k));
