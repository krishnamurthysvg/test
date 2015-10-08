using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MockExLib
{
    public class ValidatorException : ApplicationException
    {
        public ValidatorException(string message) : base(message)
        {

        }
    }
}
