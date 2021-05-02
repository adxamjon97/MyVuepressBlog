---
title: C#(C Sharp) CheatSheet
date:  2021-05-02
tags: 
  - C#
  - cSharp
  - cheatsheet
featuredimg: /assets/img/img_1.jpg
---
## Hello world

```cs
class Prog{
	static void Main(){
		System.Console.WriteLine("Hello world");
	}
}
```

```cs
WriteLine();
Write();
ReadLine();
ReadKey();
```

## O'zgaruvchilarni turlari

```cs
int    myNum       = 5;
double myDoubleNum = 5.99D;
char   myLetter    = 'D';
bool   myBool      = true;
string myText      = "Hello";
```

```cs
//const type var = value; 
const int x = 3; // o'zgarmas qiymat beriladi const yordamida
```

| Tur    | Xotira  | Hajmi                       |
|--------|---------|-----------------------------|
| int    | 4 bytes | +-2 147 483 647             |
| long   | 8 bytes | +-9 223 372 036 854 775 807 |
| float  | 4 bytes | (,) keyin 7ta               |
| double | 8 bytes | (,) keyin 15ta              |
| bool   | 1 bit   | true false(rost yolg'on)    |
| char   | 2 bytes | 1 ta simvol                 |

## 1 turdan 2-turga o'tkazish

char   -> int   -> long -> float -> double - anniq emas

double -> float -> long -> int   -> char   - anniq

graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

```cs
int myInt = 9;
double myDouble = myInt;

double myDouble = 9.78;
int myInt = (int) myDouble;
```

```cs
Convert.ToString(myInt);    // convert int to string
Convert.ToDouble(myInt);    // convert int to double
Convert.ToInt32(myDouble);  // convert double to int
Convert.ToString(myBool);	// convert bool to string
```

mat   + - * / % ++ --

equal = += -= *= /= %= &= |= ^= >>= <<=

equal2 == != < > <= >=

Logic && || !

Math.Max(x,y); // Min(x,y) Sqrt(x) Abs(x) Round(X) - yaxlitlash



[Klas va obyekt](oop.md)

## Matin metidlari

```cs
string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

txt.Length; // matin o'lchami

txt.ToLower();    // kichik harflarda
txt.ToUpper();    // katta harflarda
txt.IndexOf("E"); // E ni indexni qaytaradi
txt.Substring(i); // i raqamdegi indexda turgan elementni oladi
```

## Operatorlar

```cs
if(bool){code}
if(bool){code}else{code}
if(bool){code}else if(bool){code}else{code}

switch(val){case 1: code; break; default: code;};

while(bool){code}
do{code}while(bool)

for(head; bool; speed){code}
foreach(type val in arr){ code }
// break continue
```

## Massivlar

```cs
// int[] arr;
int[] arr = new int[]{1,2,3};
int[] arr = {1,2,3}; // 3ta elementdan iborat massiv hosil qildik

int x = arr[0]; // 0 - elementni olish

Array.Sort(arr); // tahleydi

using System.Linq;

arr.Max(); // eng kattasi
arr.Min(); // eng kichigi
arr.Sum(); // yig'indisi

string[] cars = new string[4]; // 4 ta elementdan iborat matin massivi
string[] cars = new string[4] {"Volvo", "BMW", "Ford", "Mazda"};
string[] cars = new string[] {"Volvo", "BMW", "Ford", "Mazda"};
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
```

## Metidlar

```cs
class Program{
  static void MyMethod(){ // e'lon qilish
    // code to be executed
  }

  static void Main(){
    MyMethod(); // chaqirish
  }
}
```

## Nom berib ketish

```cs
static void MyMethod(string country="Norway "){
  Console.WriteLine(country);
}

static void Main(string[] args){
  MyMethod("Sweden ");
  MyMethod("India ");
  MyMethod(); // berilgan qiymat qiymati o'tadi
  MyMethod("USA ");
}

// Sweden India Norway USA
```

## Metidni qayta yuklash

```cs
int    MyMethod(int x)

float  MyMethod(float x)

double MyMethod(double x, double y)
```

# Fayillar bilan ishlash

```cs
using System.IO;  // include the System.IO namespace

File.SomeFileMethod();  // use the file class with methods
```

| Method         | Description          |
|----------------|----------------------|
| AppendText()   | matin qo'shadi       |
| Copy()         | Copies a file        |
| Create()       | yaratadi             |
| Delete()       | o'chiradi            |
| Exists()       | borligini tekshiradi |
| ReadAllText()  | o'qiydi              |
| Replace()      | almashtiradi         |
| WriteAllText() | yozadi               |

## Faylga solish va o'qish

```cs
using System.IO;  // include the System.IO namespace

string writeText = "Hello World!";
File.WriteAllText("filename.txt", writeText);
// Create a file and write the content of writeText to it

string readText = File.ReadAllText("filename.txt");
// Read the contents of the file
Console.WriteLine(readText);

// Hello World!
```

# Hatoni kuzatadi

```cs
try{
  int[] myNumbers = {1, 2, 3};
  Console.WriteLine(myNumbers[10]);
}catch(Exception e){
  Console.WriteLine(e.Message);
}
```

## finally

```cs
try{
  int[] myNumbers = {1, 2, 3};
  Console.WriteLine(myNumbers[10]);
}catch (Exception e){
  Console.WriteLine("Something went wrong.");
}finally{
  Console.WriteLine("The 'try catch' is finished.");
}

// hatoni chaqiradi
// throw new ArithmeticException("You must be at least 18 years old.");
```
