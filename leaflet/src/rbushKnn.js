function knn(tree, x, y, n, predicate, maxDistance) {
  var node = tree.data,
      result = [],
      toBBox = tree.toBBox,
      i, child, dist, candidate;

  var queue = new TinyQueue(undefined, compareDist);

  while (node) {
      for (i = 0; i < node.children.length; i++) {
          child = node.children[i];
          dist = boxDist(x, y, node.leaf ? toBBox(child) : child);
          if (!maxDistance || dist <= maxDistance * maxDistance) {
              queue.push({
                  node: child,
                  isItem: node.leaf,
                  dist: dist
              });
          }
      }

      while (queue.length && queue.peek().isItem) {
          candidate = queue.pop().node;
          if (!predicate || predicate(candidate))
              result.push(candidate);
          if (n && result.length === n) return result;
      }

      node = queue.pop();
      if (node) node = node.node;
  }

  return result;
}

function compareDist(a, b) {
  return a.dist - b.dist;
}

function boxDist(x, y, box) {
  var dx = axisDist(x, box.minX, box.maxX),
      dy = axisDist(y, box.minY, box.maxY);
  return dx * dx + dy * dy;
}

function axisDist(k, min, max) {
  return k < min ? min - k : k <= max ? 0 : k - max;
}


class TinyQueue {
  constructor(data = [], compare = defaultCompare) {
      this.data = data;
      this.length = this.data.length;
      this.compare = compare;

      if (this.length > 0) {
          for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
      }
  }

  push(item) {
      this.data.push(item);
      this._up(this.length++);
  }

  pop() {
      if (this.length === 0) return undefined;

      const top = this.data[0];
      const bottom = this.data.pop();

      if (--this.length > 0) {
          this.data[0] = bottom;
          this._down(0);
      }

      return top;
  }

  peek() {
      return this.data[0];
  }

  _up(pos) {
      const {data, compare} = this;
      const item = data[pos];

      while (pos > 0) {
          const parent = (pos - 1) >> 1;
          const current = data[parent];
          if (compare(item, current) >= 0) break;
          data[pos] = current;
          pos = parent;
      }

      data[pos] = item;
  }

  _down(pos) {
      const {data, compare} = this;
      const halfLength = this.length >> 1;
      const item = data[pos];

      while (pos < halfLength) {
          let bestChild = (pos << 1) + 1; // initially it is the left child
          const right = bestChild + 1;

          if (right < this.length && compare(data[right], data[bestChild]) < 0) {
              bestChild = right;
          }
          if (compare(data[bestChild], item) >= 0) break;

          data[pos] = data[bestChild];
          pos = bestChild;
      }

      data[pos] = item;
  }
}

function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
