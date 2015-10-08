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
            Console.WriteLine("Welcome to the Guessing Game");
            Game game = new Game(100);
            int guess = -1;
            guess = PlayGame(game, guess);
        }

        private static int PlayGame(Game game, int guess)
        {
            while (!game.GameOver)
            {
                guess = int.Parse(Console.ReadLine());
                game.Play(guess);
                Console.WriteLine(game.Message);
                Console.WriteLine("Attempts: {0}", game.Attempts);
            }
            Console.WriteLine("Do you want to play a new game? yes/no");
            string playAgain = Console.ReadLine();
            if (playAgain == "yes")
            {
                game.Reset();
                PlayGame(game, -1);
            }
            return guess;
        }
    }
}
