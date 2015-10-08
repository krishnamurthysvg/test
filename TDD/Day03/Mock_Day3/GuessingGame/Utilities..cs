using System;
using System.Text;
using System.IO;
using System.Security.Cryptography;
using System.Linq;
using System.Collections.Generic;

namespace GuessingGameLib
{
    class Utilities
    {
        public static string FILE_PATH = "./Redirect.txt";
        public static string ENCRYPTION_KEY = "MAKV2SPBNI99212";
        static Random random = new Random();

        public static void startEncryptionGame()
        {
            Console.WriteLine("Welcome to the Encryption Game\n-------------------------------");
            Console.WriteLine("You need Encryption/Decryption: E/D");
            string option = Console.ReadLine();
            string resultString;

            if (option.ToLower() == "e")
            {
                Console.WriteLine("Enter text to encrypt:");
                string userInput = Console.ReadLine();
                if (!string.IsNullOrEmpty(userInput))
                {
                    resultString = EncryptString(userInput);
                    Console.WriteLine("Encryption is done "+ resultString);
                    writeOutputToFile(resultString);
                }
            }
            else if (option.ToLower() == "d")
            {
                Console.WriteLine("Enter cypher text to decrypt:");
                string userInput = Console.ReadLine();
                if (!string.IsNullOrEmpty(userInput))
                {
                    resultString = EncryptString(userInput);
                    Console.WriteLine("Decryption is done " + resultString);
                }
            }
            else
            {
                Console.WriteLine("Invalid input!!!");
            }

            Console.ReadKey();
        }

        private static void writeOutputToFile(string content)
        {
            FileStream ostrm;
            StreamWriter writer;
            TextWriter oldOut = Console.Out;

            try
            {
                ostrm = new FileStream(FILE_PATH, FileMode.OpenOrCreate, FileAccess.Write);
                writer = new StreamWriter(ostrm);
                Console.SetOut(writer);
                Console.WriteLine(content);
                Console.SetOut(oldOut);
                writer.Close();
                ostrm.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine("Cannot open file for writing in specified path: " + FILE_PATH);
                Console.WriteLine(e.Message);
                return;
            }
            
            Console.WriteLine("Done");
        }

        private static string EncryptString(string clearText)
        {
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(ENCRYPTION_KEY, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);

                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }

                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return clearText;
        }

        private static string DecryptString(string cipherText)
        {
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(ENCRYPTION_KEY, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);

                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }

                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }

            return cipherText;
        }
        
        public static void randomNumberGame()
        {
            Console.WriteLine("Welcome to the Random Number Game\n-------------------------------");
            Console.WriteLine("Enter how many random numbers you want?");
            int count = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter MIN number?");
            int from = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter MAX number?");
            int to = int.Parse(Console.ReadLine());
            
            List<int> vals = GenerateRandomNumber(count, from, to);
            Console.WriteLine("Result:\n" + vals.Count);
            vals.ForEach(Console.WriteLine);
            Console.ReadKey();
        }

        //Password generator
        public static string passwordGenerator(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        private static List<int> GenerateRandomNumber(int count, int min, int max)
        {
            //  initialize set S to empty
            //  for J := N-M + 1 to N do
            //    T := RandInt(1, J)
            //    if T is not in S then
            //      insert T in S
            //    else
            //      insert J in S
            //
            // adapted for C# which does not have an inclusive Next(..)
            // and to make it from configurable range not just 1.

            if (max <= min || count < 0 ||
                // max - min > 0 required to avoid overflow
                    (count > max - min && max - min > 0))
            {
                // need to use 64-bit to support big ranges (negative min, positive max)
                throw new ArgumentOutOfRangeException("Range " + min + " to " + max +
                        " (" + ((Int64)max - (Int64)min) + " values), or count " + count + " is illegal");
            }

            // generate count random values.
            HashSet<int> candidates = new HashSet<int>();

            // start count values before max, and end at max
            for (int top = max - count; top < max; top++)
            {
                // May strike a duplicate.
                // Need to add +1 to make inclusive generator
                // +1 is safe even for MaxVal max value because top < max
                if (!candidates.Add(random.Next(min, top + 1)))
                {
                    // collision, add inclusive max.
                    // which could not possibly have been added before.
                    candidates.Add(top);
                }
            }

            // load them in to a list, to sort
            List<int> result = candidates.ToList();

            // shuffle the results because HashSet has messed
            // with the order, and the algorithm does not produce
            // random-ordered results (e.g. max-1 will never be the first value)
            for (int i = result.Count - 1; i > 0; i--)
            {
                int k = random.Next(i + 1);
                int tmp = result[k];
                result[k] = result[i];
                result[i] = tmp;
            }
            return result;
        }
    }
}
