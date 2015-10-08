using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NumberEngineLib
{
    public class MathEngine
    {
        public object Compute(int number)
        {
            object output = number;
            output = checkForDivisibility(number);
            if ((int)output == number) {
                output = checkForPresenceOfDigits(number);
            }
            return output;
        }

        private object checkForDivisibility(int number)
        {
            object output = number;
            if (number % 3 == 0 && number % 5 == 0)
                output = Messages.HotHotter;
            else if (number % 3 == 0)
                output = Messages.Hot;
            else if (number % 5 == 0)
                output = Messages.Hotter;
            return output;
        }
        

        private object checkForPresenceOfDigits(int number)
        {
            object output = number;
            if (checkForDigit(3,number) && checkForDigit(5,number))
                output = Messages.HotHotter;
            else if (checkForDigit(3, number))
                output = Messages.Hot;
            else if (checkForDigit(5, number))
                output = Messages.Hotter;
            return output;
        }

        private bool checkForDigit(int digit,int number)
        {
            bool output = false;
            string numStr = number.ToString();
            if (numStr.Contains(digit.ToString()))
                output = true;
            return output;
        }
    }
}
