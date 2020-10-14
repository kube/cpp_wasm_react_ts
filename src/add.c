#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int some_function(int a, int b)
{
  puts("Hello!"),
  return a + b * a;
}
