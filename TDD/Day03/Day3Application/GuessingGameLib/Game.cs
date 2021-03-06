﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GuessingGameLib
{
    public class Game
    {
        internal int Target { get; set; }
        public int Attempts { get; set; }
        public string Message { get; set; }
        public bool GameOver { get; set; }

        public Game(int limit)
        {
            Target = new Random().Next(1, limit);
        }

        public void Play(int guess, string name)
        {
            GameOverCheck();
            Attempts++;
            InvalidInputCheck(guess);
            if (guess < Target)
                Message = "Aim Higher";
            else if (guess > Target)
                Message = "Aim Lower";
            else
            {
                Message = "Congratulations "+ name+"!!! You've got it!!!";
                GameOver = true;
            }
        }

        private void GameOverCheck()
        {
            if (GameOver)
                throw new GameException("Game is already over");
        }

        private void InvalidInputCheck(int guess)
        {
            if (guess < 1)
                throw new GameException("Invalid Guess : " + guess);
        }

        public void Reset()
        {
            if (!GameOver)
                throw new GameException("Game is in progress");
            GameOver = false;
            Attempts = 0;
            Message = null;
            Target = new Random().Next(1, 100);
        }
    }
}
