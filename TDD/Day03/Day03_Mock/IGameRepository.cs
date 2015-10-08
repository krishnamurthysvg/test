using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GuessingGameLib
{
    public interface IGameRepository
    {
        bool StoreInformation(string name, int target, int attempts);
    }
}
