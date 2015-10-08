using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GameCon
{
    interface IDBInstance
    {
        string Name { get; set; }
        int target{get; set;}
        int attempts { get; set; }
        void SavetoDB(String Name, int Target, int attempts);
        
    }
}
