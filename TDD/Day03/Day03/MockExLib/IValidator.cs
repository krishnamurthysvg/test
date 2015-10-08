using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MockExLib
{
    public interface IValidator
    {
        bool ValidateLength(string value);
    }
}
