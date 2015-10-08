using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GuessingGameLib
{
    public class GameException : ApplicationException
    {
        public GameException(string message) : base(message)
        {

        }
    }
}
