package com.example.lime.test;

import android.app.Activity;
import android.os.Bundle;

/**
 * Created by lime on 2016-05-26.
 */
public class Campa_read1 extends Activity {
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.campa_read1_layout);
}
    @Override
    public void onBackPressed() {
        Tab_campaign parent = ((Tab_campaign)getParent());
        parent.onBackPressed();
    }
}
