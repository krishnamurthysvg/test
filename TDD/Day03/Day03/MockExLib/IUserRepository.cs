using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MockExLib
{
    public interface IUserRepository
    {
        bool SaveUser(string userName, string password);
    }
}
