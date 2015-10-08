using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using GuessingGameLib;

namespace GameCon
{
    class Program
    {
        static void Main(string[] args)
        {
            Game game = new Game(100);
            int guess = -1;

            Console.WriteLine("Please enter name");
            string name = Console.ReadLine();
            Console.WriteLine("Welcome to the Guessing Game " + name);

            if (!string.IsNullOrEmpty(name))
                guess = PlayGame(game, guess, name);
            else
                guess = PlayGame(game, guess, "Guest");

            
        }

        public static int PlayGame(Game game, int guess, string name)
        {
            Console.WriteLine("Enter your guess number: " + name);

            if(name==null)
                name = Console.ReadLine();
            while (!game.GameOver)
            {
                string guessNum = Console.ReadLine();
                if (!string.IsNullOrEmpty(guessNum))
                {
                    guess = int.Parse(guessNum);
                    /*try
                    {
                        guess = int.Parse(guessNum);
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("Some error with number");
                        game.GameOver = true;
                        game.Reset();
                        PlayGame(game, -1, name);
                    }*/
                    
                }

                game.Play(guess, name);
                Console.WriteLine(game.Message);
                Console.WriteLine("Attempts: {0}", game.Attempts);
            }
            Console.WriteLine("Do you want to play a new game? yes/no");
            string playAgain = Console.ReadLine();
            if (playAgain.ToLower() == "yes" || playAgain.ToLower() == "y")
            {
                game.Reset();
                PlayGame(game, -1, name);
            }
            return guess;
        }
    }
}
